from django.urls import path
from . import views

urlpatterns = [
    path('menu', views.menu, name='menu'),
    path('ArmyShop', views.ArmyShop, name='ArmyShop'),
    path('MyFavorite', views.MyFavorite, name='MyFavorite'),
]