<script>
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import {
    ContactListArrayStore,
  } from '$lib/stores/ContactListArrayStore.mjs';

  const contacts = []
</script>

<style>
  #data-table-container {
    width: 50vw;
    height: 50vh;
    position: absolute;
    top: 25%;
    left: 25%;
    background-color: hsl(0deg 0% 15%);
  }
</style>

<div id='data-table-container'>
  <DataTable stickyHeader table$aria-label="User list" style="width: 100%;">
    <Head>
      <Row>
        <Cell>email</Cell>
        <Cell>first name</Cell>
        <Cell>last name</Cell>
      </Row>
    </Head>
    <Body>
      {#each $ContactListArrayStore as item (item.email)}
        <Row>
          <Cell>{item.email}</Cell>
          <Cell>{item.firstName}</Cell>
          <Cell>{item.lastName}</Cell>
        </Row>
      {/each}
    </Body>
  </DataTable>
</div>