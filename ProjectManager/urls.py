from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name = 'home'),
    path('HorrorStories/', views.HorrorStories, name='HorrorStories'),
    path('RomanConverter/', views.RomanConverter, name='RomanConverter'),
    path('RandomQuotes/', views.RandomQuotes, name='RandomQuotes'),
    path('SpaceInvaders/', views.SpaceInvaders, name='SpaceInvaders'),
    path('SmithWaterman/', views.SmithWaterman, name='SmithWaterman'),
    path('HeartFailure/', views.HeartFailure, name='HeartFailure'),
    path('FinalDegreeProject/', views.FinalDegreeProject, name='FinalDegreeProject'),
    path('3_Bullets/', views.Three_Bullets, name='3_Bullets')
]