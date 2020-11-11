# Generated by Django 3.0.8 on 2020-11-03 16:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('modules', '0010_answer_created_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='updated_by',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='answer',
            name='user',
            field=models.ForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='answer',
            name='created_by',
            field=models.CharField(max_length=200, null=True),
        ),
    ]