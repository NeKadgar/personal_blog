from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response

from project_posts.serializers import PostListSerializer, PostSerializer
from project_posts.models import Post
# Create your views here.


class PostListView(APIView):
    def get(self, request):
        posts = Post.objects.order_by('-created')
        serializer = PostListSerializer(posts, many=True)
        return Response(serializer.data)
    

class PostDetailView(APIView):
    def get(self, request, pk):
        post = get_object_or_404(Post, id=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)
