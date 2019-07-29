from django.shortcuts import render
from rest_framework import generics

from . import models
from . import serializers


class NoteList(generics.ListCreateAPIView):
    """show list notes"""
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteSerializer


class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    """show detail notes"""
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteSerializer



