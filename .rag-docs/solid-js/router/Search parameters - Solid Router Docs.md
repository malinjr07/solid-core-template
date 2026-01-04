Search parameters are used to pass data to a route using the query string. The query string is the part of the URL that comes after the `?` character and is used to pass key-value pairs to the route.

In Solid Router, these query parameters can be accessed using [`useSearchParams`](https://docs.solidjs.com/solid-router/reference/primitives/use-search-params). This primitive retrieves a tuple that contains a reactive object that reads the current search parameters and a function to update them.

```javascript
import { useSearchParams } from "@solidjs/router";
export const App = () => {  const [searchParams, setSearchParams] = useSearchParams();
  return (    <div>      <span>Username: {searchParams.username}</span>      <input        type="text"        onChange={(e) => {          e.preventDefault();          setSearchParams({ username: e.target.value });        }}      />    </div>  );};
```

The getter, in this case `searchParams`, is used to read the current search parameters. `setSearchParams` works as the setter which accepts an _object_ whose entries will be merged into the current query.

___

## [Multiple queries](https://docs.solidjs.com/solid-router/concepts/search-parameters#multiple-queries)

Since `setSearchParams` accepts an object, you can pass multiple key-value pairs to update multiple search parameters at once.

```php
setSearchParams({  username: "john",  page: 1,});
```

___

## [Accessing query strings](https://docs.solidjs.com/solid-router/concepts/search-parameters#accessing-query-strings)

If you require accessing the query string directly, you can use the [`useLocation`](https://docs.solidjs.com/solid-router/reference/primitives/use-location) primitive:

```javascript
import { useLocation } from "@solidjs/router";
export const App = () => {  const location = useLocation();
  return (    <div>      <span>Query String: {location.search}</span>    </div>  );};
```

If the URL was `http://localhost:3000/users?username=john&page=1`, the output would be `Query String: ?username=john&page=1`.