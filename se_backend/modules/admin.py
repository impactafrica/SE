from django.contrib import admin
from django.contrib.auth.models import Group
from django import forms

# Register your models here.
from .models import *

class ModuleA(admin.ModelAdmin):
    list_display = ('module_name', 'module_number')
    search_fields = ['module_name', 'module_number'] 

class TopicA(admin.ModelAdmin):
    list_display = ('topic_name','topic_number','get_module')
    list_filter = ('module_id','topic_number')
    def get_module(self, obj):
        return obj.module_id.module_name

class SubTopicA(admin.ModelAdmin):
    list_display = ('subtopic_name','subtopic_number','get_topic')
    list_filter = ('topic_id','subtopic_number')
    def get_topic(self, obj):
        return obj.topic_id.topic_name

class ProjectA(admin.ModelAdmin):
    list_display = ('project_name', 'description')
     
# Register your models here
admin.site.register(Project,ProjectA)
admin.site.register(Module,ModuleA)
admin.site.register(Topics,TopicA)
admin.site.register(SubTopics,SubTopicA)
admin.site.register(Question)
admin.site.unregister(Group)

admin.site.site_header = "SE Admin Page"
admin.site.index_title = "SE Admin Page"
