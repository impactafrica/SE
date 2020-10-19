from django.db import models

# Create your models here.
class User(models.Model):
    full_name=models.CharField(max_length=200)
    email=models.EmailField(max_length=200)
    password=models.CharField()
    status=models.BooleanField()
    time_created=models.DateTimeField(auto_now_add=True)
    status_change=models.BooleanField()

class Project(models.Model):
    user_id=models.ForeignKey(User,on_delete=models.SET_NULL,null=true)
    project_name=models.CharField(max_length=200)
    description=models.CharField(max_length=500)
    status=models.BooleanField()
    time_created=models.DateTimeField(auto_now_add=True)

class Module(models.Model):
    module_number=models.IntegerField(max_length=100)
    module_name=models.CharField(max_length=200)
    module_status=models.BooleanField()

class Question(models.Model):
    module_id=models.ForeignKey(Module,on_delete=models.SET_NULL,null=true)
    question_number=models.IntegerField(max_length=100)
    question=models.CharField(max_length=200)
    question_status=models.BooleanField()

class Answer(models.Model):
    question_id=models.ForeignKey(Question,on_delete=models.SET_NULL,null=true)
    project_id=models.ForeignKey(Project,on_delete=models.SET_NULL,null=true)
    answer_string=models.CharField(max_length=200)
    time_answered=models.DateTimeField(auto_now_add=True)
