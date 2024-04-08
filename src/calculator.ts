class Calculator {
   value = 0;

   sum(value: number) {
      this.value += value;
   }

   sub(value: number) {
      this.value -= value;
   }

   mult(value: number) {
      this.value *= value;
   }

   div(value: number) {
      if (value === 0) {
         return "Cannot div by 0.";
      }

      this.value /= value;
   }

   reset() {
      this.value = 0;
   }
}
