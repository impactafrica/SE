# Generated by Django 3.1.3 on 2020-11-23 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0029_content_content_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='question',
            field=models.JSONField(blank=True, max_length=200, null=True),
        ),
    ]
