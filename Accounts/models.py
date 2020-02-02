from django.db import models
from django.contrib.auth.models import User
from datetime import date

# Create your models here.
class Customer(models.Model):

    user = models.OneToOneField(User , on_delete=models.CASCADE)
    middle_name = models.CharField(blank=True , max_length=150)
    vendor = models.BooleanField(default=False)

    @property
    def full_name(self):
        return f"{self.user.first_name} {self.user.last_name}"
    def __str__(self):
        return self.full_name
    @property
    def all_address(self):
        return self.address_set.all()
    @property
    def contacts(self):
        return self.contact_set.all()


        
class Contact(models.Model):
    customer = models.ForeignKey(Customer , on_delete=models.CASCADE)
    label = models.CharField(max_length=150)
    number = models.DecimalField(max_digits=10, decimal_places=0)

    def __str__(self):
        return self.label

class Address(models.Model):
    customer = models.ForeignKey(Customer , on_delete=models.CASCADE)
    country = models.CharField(max_length=150)
    state = models.CharField(max_length=150)
    district = models.CharField(max_length=50)
    town_or_city = models.CharField(max_length=50)
    locality = models.CharField(max_length=50)
    nearest_landmark = models.CharField(max_length=50)
    pin_code = models.DecimalField(max_digits=6, decimal_places=0)
    house_no_or_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.house_no_or_name} , near {self.nearest_landmark} , {self.locality} , {self.district} , {self.state} , {self.country}"
     

class Master(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    middle_name = models.CharField(max_length=150)
    date_of_birth = models.DateField()
    short_bio = models.TextField()
    joining_date = models.DateField()
    display_image = models.URLField(max_length=400 , blank=True,null=True)
    contact_number = models.DecimalField(max_digits=10, decimal_places=0 , blank=True,null=True)

    @property
    def full_name(self):
        return f"{self.user.first_name} {self.middle_name} {self.user.last_name}"

    
    def __str__(self):
        return self.full_name

    @property
    def exprience(self):
        
        return "shit"

    


class Seller(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cover_image = models.URLField(max_length=400,null=True,blank=True)
    contact_number = models.DecimalField(max_digits=10, decimal_places=0)
    address = models.TextField(blank=True,null=True)

    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"
