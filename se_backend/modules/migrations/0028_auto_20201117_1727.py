# Generated by Django 3.1.3 on 2020-11-17 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0027_auto_20201117_1724'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='answer_string',
            field=models.JSONField(default='hey'),
        ),
        migrations.AlterField(
            model_name='question',
            name='question',
            field=models.JSONField(default='hey'),
        ),
    ]