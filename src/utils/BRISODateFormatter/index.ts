export function dataBRFormatter(transactionDate: Date){
   return new Intl.DateTimeFormat("pt-BR").format(
      new Date(transactionDate)
    )
}