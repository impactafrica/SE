# Generated by Django 3.0.8 on 2020-11-03 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0005_delete_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='status',
            field=models.CharField(default='Created', max_length=200),
        ),
    ]