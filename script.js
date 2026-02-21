JavaScript
async function askAI() {
  const question = document.getElementById("question").value;
  const response = await 
    fetch("https://api-inference.huggingface
          .co/models/google/flan-t5-large", {
      method: "POST",
      headers: {
        "Authorization": "Bearer
          ΒΑΛΕ_ΕΔΩ_ΤΟ_ΤΟΚΕΝ_ΣΟΥ",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs:
        "Explain simply for a Greek high school student: " + question })
    });
  const data = await response.json();
  document.getElementById("response").innerT
  ext = data[0].generated_text;
}
