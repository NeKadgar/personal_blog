from django.urls import path
from frontend.views import index_page

urlpatterns = [
    path('', index_page)
]