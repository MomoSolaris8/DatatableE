#####1. Adding the Dependieces
* npm install ngx-bootstrap bootsreap --save
* adding into angualr.json
```
styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]

```
* add into app.module.ts
```
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
```
<span style="color:red"> providers: [EmployeeService]</span>
** npm install jquery --save