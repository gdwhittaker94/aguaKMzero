<template>
  <div>
    <label for="waterRefills">Number of Water Refills:</label>
    <input type="number" v-model="waterRefills" id="waterRefills">
    <button @click="calculateImpact">Calculate Impact</button>

    <div>
      <h2>Environmental Impact</h2>
      <p>Bottles Saved: {{ bottlesSaved }}</p>
      <p>Kilograms of Plastic Saved: {{ plasticSaved }}</p>
      <p>Kilograms of Carbon Dioxide Saved: {{ co2Saved }}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  data() {
    return {
      waterRefills: 0,
      bottlesSaved: 0,
      plasticSaved: 0,
      co2Saved: 0
    };
  },
  methods: {
    calculateImpact() {
      this.bottlesSaved = this.waterRefills * 2; // Assuming each refill saves 2 bottles
      this.plasticSaved = this.bottlesSaved * 18; // Assuming each bottle is 18g
      this.co2Saved = this.bottlesSaved * 54.7; // Assuming each bottle produces 54.7g of CO2
      this.animateNumbers();
      this.shareImpact();
    },
    animateNumbers() {
      // Implement animation here (e.g., using setTimeout)
    },
    shareImpact() {
      // Firebase share impact implementation
      const db = firebase.firestore();
      db.collection('impact').add({
        bottlesSaved: this.bottlesSaved,
        plasticSaved: this.plasticSaved,
        co2Saved: this.co2Saved,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        console.log("Impact shared successfully");
      })
      .catch(error => {
        console.error("Error sharing impact: ", error);
      });
    }
  }
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
