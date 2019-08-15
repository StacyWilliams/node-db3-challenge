# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
<!-- inccorect number of records (77)-->
SELECT productName, categoryName
from products, categories
where products.categoryId = categories.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
<!-- wrong 196 records-->
select orderId, ShipperName
From orders, shippers
where orders.shipperId == shippers.shipperId
order by orders.orderDate < 1997-01-09 desc

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
<!-- 518 records because I haven;t grabbed orderId -->
SELECT productName, quantity
from products, orderDetails
where orderdetails.productId = products.productId

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT orders.orderId, customers.customerName, employees.lastName as Employee_Last_Name
FROM orders
inner JOIN customers ON orders.customerId = customers.customerId
inner JOIN employees ON orders.employeeId = employees.employeeId

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 