# CMSI_2021_HW1_Compound_Interest_Calculator

# COMPOUND INTEREST CALCULATOR:
This web app is a compound interest calculator that allows users to input the following values:

1. Principal (Initial amount of money)
2. Annual Interest Rate (in percentage)
3. Compound Type (e.g., annually, semi-annually quarterly, etc.)
4. Number of Years

Upon clicking "Submit," the app calculates the compound interest, the final accrued amount (principal + interest), and the amount of money earned.

# CALCULATION METHODS:
Standard Compound Interest Formula:
When the user selects any compound type other than "Continuously," the following formula is used:

A = P(1 + r/n)^nt
 
Where:

A = Accrued amount (principal + interest)
P = Principal amount
r = Annual interest rate (decimal form)
n = Number of compounding periods per year
t = Time in years

Continuous Compound Interest Formula:
If the user selects the compound type "Continuously," the formula changes to:

A = (Pe)^rt
 
Where:

A = Accrued amount (principal + interest)
P = Principal amount
e = Euler's constant (approximately 2.71828)
r = Annual interest rate (decimal form)
t = Time in years

# INPUT CONVERSIONS:
The annual rate entered by the user (R%) is converted to a decimal for the calculations:

r = R/100
​

# ADDITIONAL INFORMATION:
t (Time): Can be entered as a decimal. For example, 6 months would be represented as 0.5 years.
Credits

The web app is hosted on Code Sandbox. 
Repo Link: https://codesandbox.io/p/sandbox/cmsi2021-homework1-compondinterestcalculator-gabrielw-jthvd8?file=%2FREADME%3A48%2C46

Web App Link: https://jthvd8.csb.app/

The compound interest formulas and form layout were inspired by https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php.
