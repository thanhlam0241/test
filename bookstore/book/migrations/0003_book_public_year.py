# Generated by Django 5.1.1 on 2024-09-30 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0002_book_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='public_year',
            field=models.IntegerField(default=2000),
        ),
    ]