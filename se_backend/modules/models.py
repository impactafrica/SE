from django.db import models
import uuid
from crum import get_current_user  
import crum      
# As model field:
from django.contrib.auth import get_user_model as user_model
User = user_model()

# Create your models here.
class Project(models.Model):
    project_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    project_name=models.CharField(max_length=200)
    description=models.CharField(max_length=500)
    status=models.CharField(max_length=200,default="Created",editable=False)
    time_created=models.DateTimeField(auto_now_add=True)
    userid = models.CharField(max_length=45,null=False, blank=True, editable=False, default=crum.get_current_user())

    def save(self, *args, **kwargs):
        userid = crum.get_current_user()
        self.userid = userid.id
        super(Project, self).save(*args, **kwargs)

class Module(models.Model):
    module_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    module_logo = models.ImageField(upload_to='module_logo')
    module_number = models.IntegerField()
    module_name = models.CharField(max_length=200)
    status=models.CharField(max_length=200,default="Created",editable=False)
    time_created = models.DateTimeField(auto_now_add=True)
    module_description = models.CharField(max_length=200,null=True,default="description")
    userid = models.CharField(max_length=45,null=False, blank=True, editable=False, default=crum.get_current_user())

    def save(self, *args, **kwargs):
        userid = crum.get_current_user()
        self.userid = userid.id
        super(Module, self).save(*args, **kwargs)

class Topics(models.Model):
    topic_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    topic_name = models.CharField(max_length=200)
    module_id = models.ForeignKey(Module,on_delete=models.SET_NULL,null=True)
    topic_number = models.IntegerField()
    topic_description = models.CharField(max_length=400)

class SubTopics(models.Model):
    subtopic_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    subtopic_name = models.CharField(max_length=200)
    topic_id = models.ForeignKey(Topics,on_delete=models.SET_NULL,null=True)
    subtopic_number = models.IntegerField()
    subtopic_description = models.CharField(max_length=400)

class Question(models.Model):
    question_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    module_id=models.ForeignKey(Module,on_delete=models.SET_NULL,null=True)
    question_number=models.IntegerField()
    question=models.CharField(max_length=200)
    question_status=models.CharField(max_length=200)

class Answer(models.Model):
    answer_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    question_id=models.ForeignKey(Question,on_delete=models.SET_NULL,null=True)
    project_id=models.ForeignKey(Project,on_delete=models.SET_NULL,null=True)
    answer_string=models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    userid = models.CharField(max_length=45,null=False, blank=True, editable=False, default=crum.get_current_user())

    def save(self, *args, **kwargs):
        userid = crum.get_current_user()
        self.userid = userid.id
        super(Answer, self).save(*args, **kwargs)