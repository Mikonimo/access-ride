#!/usr/bin/python3
customer_name = input("Enter name: ")
address = input("Enter address: ")
tel = input("Enter telephone no: ")
prev_reading = float(input("Enter previous meter reading: "))
curr_reading = float(input("Enter current meter reading: "))

units_used = curr_reading - prev_reading
cost = 0

if units_used > 0 and units_used <= 100:
    cost = units_used * 2.50
elif units_used > 100 and units_used <= 200:
    cost = units_used * 2.25
elif units_used > 200 and units_used <= 350:
    cost = units_used * 1.90
else:
    cost = units_used * 1.65

print('')
print(f'Name of Customer: {customer_name}')
print(f'Address: {address}')
print(f'Telephone Number: {tel}')
print(f'Previous meter reading: {prev_reading}')
print(f'Current meter reading: {curr_reading}')
print(f'Consumption: {units_used} units')
print(f'Bill to pay: Kshs {cost:.2f}')
