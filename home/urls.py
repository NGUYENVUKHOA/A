from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="home"),
    path("login/", views.loginUser, name="login"),
    path("logout/", views.logoutUser, name="logout"),
    path("permission-user", views.permissionUser, name="permission-user"),
    path("approve_update/<str:pk>", views.approve_update, name="approve_update"),
    path("disabled_update/<str:pk>", views.disabled_update, name="disabled_update"),
    path("detail_shop/<str:pk>", views.detailShop, name="detailShop"),
]
