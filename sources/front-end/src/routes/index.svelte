<script>
  import Form from '$lib/controls/Form.svelte';

  const handleFormData = ({ detail = null }) => {
    console.log(detail);
  }
</script>

<Form on:formData={handleFormData} />
