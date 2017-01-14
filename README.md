# Ember-content-for

This addon is a proof of concept for named yields.

```hbs
// templates/applications.hbs

{{#user-signup-form as |user-signup-form|}}

  {{#content-for user-signup-form "success"}}
    Success! we've created your account!
  {{/content-for}}

  {{#content-form user-signup-form "error"}}
    Opps! there was an error.
  {{/content-for}}

{{/user-signup-form}}
```

```hbs
// templates/components/user-signup-form.hbs

{{yield (allow-content-for this)}}

<form>

  {{#if didError}}
    {{#if (has-content-for this "error")}}
      {{yield (content-for this "error")}}
    {{else}}
      Default error message would go here
    {{/if}}
  {{/if}}

  // ... the user signup form is here ...

  {{#if (has-content-for this "success")}}
    {{yield (content-for this "success")}}
  {{else}}
    Default success message would be here.
  {{/if}}

</form>
```

## Install

`ember install ember-content-for`
