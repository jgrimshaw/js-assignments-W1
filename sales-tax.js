
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
}

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
]


function calculateSalesTax(salesData, taxRates) {

  // telus BC sales
  const telusBcArray = salesData[0].sales // [ 100, 200, 400 ]
  let telusBcTotal = 0 // 700
  for(let i = 0; i < telusBcArray.length; i++){
    telusBcTotal += telusBcArray[i]
  }
  // telus SK sales
  const telusSkArray = salesData[2].sales //[ 500, 100 ]
  let telusSkTotal = 0 // 600
  for(let i = 0; i < telusSkArray.length; i++){
    telusSkTotal += telusSkArray[i]
  }
  // bombardier AB sales
  const bombardierArray = salesData[1].sales
  let bombardierTotal = 0
  for(let i = 0; i < bombardierArray.length; i++){
    bombardierTotal += bombardierArray[i]
  }

  // telus object
  const t = {}
  t.totalSales = telusSkTotal + telusBcTotal
  t.totalTaxes = (telusSkTotal * taxRates.SK) + (telusBcTotal * taxRates.BC)


  // bombardier object
  const b = {}
  b.totalSales = bombardierTotal
  b.totalTaxes = bombardierTotal * taxRates.AB

  //
  const obj = {Telus: t, Bombardier: b}
  return obj
}

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)

/* Expected Results:
{
  Telus: {
    totalSales: 1300,
    totalTaxes: 144 },

  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
