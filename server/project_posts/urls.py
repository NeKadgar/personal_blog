from django.urls import path
from project_posts.views import PostListView, PostDetailView


app_name = "project posts"

urlpatterns = [
    path('posts/', PostListView.as_view()),
    path('posts/<int:pk>', PostDetailView.as_view())
]
