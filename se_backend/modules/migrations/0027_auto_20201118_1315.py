# Generated by Django 3.1.3 on 2020-11-18 10:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0026_auto_20201118_1314'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='question',
            field=models.JSONField(max_length=200, null=True),
        ),
    ]
