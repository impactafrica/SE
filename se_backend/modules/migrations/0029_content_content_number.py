# Generated by Django 3.1.3 on 2020-11-23 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0028_question_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='content',
            name='content_number',
            field=models.IntegerField(default=2),
            preserve_default=False,
        ),
    ]
