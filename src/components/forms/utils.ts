export enum errorFormLabels {
    REQUIRED = "Campo obbligatorio 🚨",
  }
  
  export function maxLengthLabel(length: number) {
    if(length === 1) return "Il valore inserito deve essere composto da UN solo carattere"
    return `Il valore inserito non deve superare i ${length} caratteri di lunghezza`
  }

  export function setDefaultDate(value?: string) {
    if(value) {
      return new Date(value)
    }
    return null
  }