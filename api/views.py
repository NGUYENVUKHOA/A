from django.shortcuts import render

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from rest_framework import status
from rest_framework.serializers import Serializer
from api import serializers
from home.models import *
from django.http import HttpResponse
from django.http import JsonResponse
from django.db.models import Q
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from api.serializers import RoleLoginSerializer
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view

import json
# Create your views here.

def index(request):
    return '11111' 

@login_required(login_url="login")
def listUserByShop(request, shop_id):
    try:
        data = Users_of_shop.objects.filter(Q(cid_shop=shop_id) & Q(status=1)).values()
        response = json.dumps(list(data), indent=4, sort_keys=True, default=str) 
    except Users_of_shop.DoesNotExist:
        data = None
    return HttpResponse(response, content_type="application/json")

class ListCreateRoleLoginView(ListCreateAPIView):
    model = RoleLogin
    serializer_class = RoleLoginSerializer

    def get_queryset(self):
        return RoleLogin.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = RoleLoginSerializer(data=request.data)

        print(request.data)
        
        if serializer.is_valid():
            serializer.save()

            return JsonResponse({
              'message': 'Create a new role login successful!'
            }, status=status.HTTP_201_CREATED);

        return JsonResponse({
            'message': 'Create a new role login unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)

class UpdateDeleteRoleLoginView(RetrieveUpdateDestroyAPIView):
    model = RoleLogin
    serializer = RoleLoginSerializer

    def put(self, request, *args, **kwargs):
        roleLogin = get_object_or_404(RoleLogin, id=kwargs.get('pk'))
        serializer = RoleLoginSerializer(roleLogin, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return JsonResponse({
                'message': 'Update Role Login successful!'
            }, status=status.HTTP_200_OK)

        return JsonResponse({
            'message': 'Update Role Login unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, *args, **kwargs):
        roleDelete = get_object_or_404(RoleLogin, id=kwargs.get('pk'))
        roleDelete.delete()

        return JsonResponse({
            'message': 'Delete Role Login successful!'
        }, status=status.HTTP_200_OK)

@api_view(['GET'])
def role_user_list(request):
    user_id = request.query_params.get('user_id', None)

    role_list = RoleLogin.objects.filter(user_id=user_id)
    
    # list_delete = list(role_list);

    for item in role_list:
        if item.role == 1:
            RoleLogin.objects.filter(~Q(role = 1), user_id=user_id).delete()
            role_list = RoleLogin.objects.filter(user_id=user_id)

    role_list_serializer = RoleLoginSerializer(role_list, many=True)

    return JsonResponse(
        role_list_serializer.data, 
        safe=False
    )