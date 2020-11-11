from django.contrib import admin

# Register your models here.
from .models import *

# Register your models here.
admin.site.register(Project)
admin.site.register(Module)
admin.site.register(Topics)
admin.site.register(SubTopics)
admin.site.register(Question)
admin.site.register(Answer)