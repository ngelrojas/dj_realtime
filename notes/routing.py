from django.urls import path

from . import consumers

websockets_urlpatterns = [
    path('ws/notes', consumers.NoteConsumer)
]
