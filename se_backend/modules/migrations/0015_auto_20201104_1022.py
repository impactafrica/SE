# Generated by Django 3.0.8 on 2020-11-04 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0014_auto_20201104_1020'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='user',
        ),
        migrations.AddField(
            model_name='project',
            name='userid',
            field=models.CharField(blank=True, default=None, editable=False, max_length=45),
        ),
    ]