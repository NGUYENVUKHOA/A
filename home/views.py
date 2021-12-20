from django.shortcuts import render, redirect
from .decorator import unauthenticated_user
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
import json
from django.db.models import F
from django.views.decorators.csrf import csrf_exempt
from django.db import connection, transaction
from django.db.models.expressions import RawSQL
from .models import *
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .context_processors import *
from django.core import serializers

@login_required(login_url="login")
def index(request):
    shops = Shop.objects.all()
    context = {"shops": shops}
    return render(request, "pages/shop/list_shop.html", context)


@unauthenticated_user
def loginUser(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return redirect("/")
        else:
            messages.info(request, "Email or password is incorrect")

    context = {}
    return render(request, "pages/accounts/login.html", context)


def logoutUser(request):
    logout(request)
    return redirect("login")

@login_required(login_url="login")
def permissionUser(request):
    # from django.db import connection, transaction

    # cursor = connection.cursor()

    # query = f"""SELECT t1.id, t1.name as shop_name, t2.nick_name, t2.role from hc_shop as t1 LEFT JOIN (hc_users_of_shop as t2 CROSS JOIN users as t3 CROSS JOIN hc_role_login as t4) ON (t2.cid_shop = t1.id AND t3.id = t2.cid_user AND t4.user_id = t2.cid_user);"""
    # cursor.execute(query)
    # results = dictfetchall(cursor)

    # results = cursor.fetchall()
    # jsonObj = json.dumps(results)
    # jsonArr = json.loads(jsonObj)

    # shops = serializers.serialize("json", Shop.objects.all().filter(status=1))
    shops = Shop.objects.all().filter(status=1).values()
    shops = list(shops)
    context = {
      "shops": shops
    }

    return render(request, "pages/accounts/permission_user.html", context)

@login_required(login_url="login")
def approve_update(request, pk):
    try:
        shop = Shop.objects.get(pk=pk)
        shop.status = "1"
    except Shop.DoesNotExist():
        return render(
            request,
            "pages/shop/list_shop.html",
            {"error": "match with given id dosnt exist"},
        )
    shop.save()

    # return same page after method POST
    return HttpResponseRedirect(request.META.get("HTTP_REFERER"))

@login_required(login_url="login")
def disabled_update(request, pk):
    try:
        status_update = Shop.objects.get(pk=pk)
        status_update.status = "2"
    except Shop.DoesNotExist():
        return render(
            request,
            "pages/shop/list_shop.html",
            {"error": "match with given id dosnt exist"},
        )
    status_update.save()

    # return same page after method POST
    return HttpResponseRedirect(request.META.get("HTTP_REFERER"))

@login_required(login_url="login")
def detailShop(request, pk):
    from django.db import connection, transaction

    shop = Shop.objects.get(pk=pk)
    cursor = connection.cursor()

    query = f"""SELECT t1.id,t1.name, t2.name, t3.user_name, t4.name, t1.phone, t1.email, t1.address, t1.description, t1.avatar_image, t1.images, t1.multi_images FROM hc_shop as t1 LEFT JOIN (hc_location as t2 CROSS JOIN users as t3 CROSS JOIN hc_career as t4) ON (t2.id = t1.cid_location AND t3.id = t1.cid_user AND t4.id = t1.cid_career) where t1.id ={pk};"""

    cursor.execute(query)

    results = cursor.fetchall()
    jsonObj = json.dumps(results)
    jsonArr = json.loads(jsonObj)
    for i in jsonArr:
        mul_image = i[11]
        mul_image1 = json.loads(mul_image)
        # print(mul_image)
        # if mul_image is not None:
        #     return HttpResponseBadRequest()
        # else:

        #     mul_image1 = json.loads(mul_image)
        #     print(mul_image1)
        # return mul_image1
    context = {"results": jsonArr, "image": mul_image1}

    return render(request, "pages/shop/detail_shop.html", context)