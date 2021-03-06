import Ember from 'ember';
const { computed } = Ember;
const { reads } = computed;

/**
 * simple helper to store the columns that will be used to for display & search on a paginate list
 */
export default Ember.Object.extend({

    //the friendly name
    displayName: null,

    //the model property
    fieldName: null,
    //the model property
    sortingField: reads('fieldName'),

    //list this field in the search component?
    enableSearch: true,

    //list this field in the main listing?
    enableDisplay: true,

    //order in which to display the fields
    order: 0,

    // show the quick filter or not
    showingFilter: false,

    // value on the filter for this column
    filterValue: null,

    // filter field name in case of a conflict, i.e. id (when joined to another table)
    filterFieldName: null,

    // To make a column not searchable/sortable
    disableServerInteractions: false,

    serverColumnName: computed('fieldName', 'filterFieldName', function() {
      if (Ember.isPresent(this.get('filterFieldName'))) {
        return this.get('filterFieldName');
      }
      else {
        return this.get('fieldName');
      }
    })
});
