from django.db import models
from Shop.models import *
from Accounts.models import *
# Create your models here.



class Purchase(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    sublet = models.ForeignKey(Sublet, on_delete=models.CASCADE)
    quantity = models.DecimalField(max_digits=6, decimal_places=2)
    units = models.CharField(max_length=150)

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)


    @property
    def total_price(self):
        return self.quantity*self.sublet.purchase_price

    def __str__(self):
        return f"{self.product} was bought ${self.quantity} ${self.units}"
