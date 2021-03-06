from django_editorjs_fields import fields
from rest_framework import serializers
from project_posts.models import Post


class PostListSerializer(serializers.ModelSerializer):
    created = serializers.DateField(format="%B %Y")
    class Meta:
        model = Post
        fields = ('id', 'title', 'preview_image', 'created', 'description')


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
