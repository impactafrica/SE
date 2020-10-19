from django.db import models
import uuid


# Create your models here.
class User(models.Model):
    user_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    full_name=models.CharField(max_length=200)
    email=models.EmailField(max_length=200)
    password=models.CharField(max_length=200)
    status=models.CharField(max_length=200)
    time_created=models.DateTimeField(auto_now_add=True)
    time_status_change=models.DateTimeField(auto_now_add=True)

class Project(models.Model):
    project_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    project_name=models.CharField(max_length=200)
    description=models.CharField(max_length=500)
    status=models.CharField(max_length=200)
    time_created=models.DateTimeField(auto_now_add=True)

class Module(models.Model):
    module_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    module_number=models.IntegerField()
    module_name=models.CharField(max_length=200)
    module_status=models.CharField(max_length=200)

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
    time_answered=models.DateTimeField(auto_now_add=True)
