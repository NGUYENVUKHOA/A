from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("user-of-shop/<int:shop_id>", views.listUserByShop, name="user-of-shop"),
    path('role-login/', views.ListCreateRoleLoginView.as_view(), name='role-login'),
    path('role-login/<int:pk>', views.UpdateDeleteRoleLoginView.as_view(), name='role-login-update-delete'),
    path('role-login-user/', csrf_exempt(views.role_user_list), name='role-login-user'),
]