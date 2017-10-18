# JSWorks
MVC-фреймворк для фронтенд-разработки + шаблонизатор + VirtualDOM.

## Как это выглядит?
### Component
Компонент -- это основная единица приложения. Компонент связывает представление и контроллер.

@JSWorks.%{CLASS}%({ view: '%{NAME}%View', controller: '%{NAME}%Controller' })
export class %{NAME}%%{CLASS}% {


    @JSWorks.ComponentProperty()
    public testA: string;


    @JSWorks.ComponentProperty({ onChange: 'onTestBChange' })
    public testB: string = 'default';


    @JSWorks.ComponentProperty({ mapping: '#h2@innerHTML' })
    public testC: string;


}

### View
View -- это шаблон на основе HTML. Шаблон компилируется в VirtualDOM при изменении свойств компонента, VirtualDOM потом вырендеривается в страницу.

```html
<app-view id="%{NAME}%View" %{EXTENDS}%>

    <h2>This is %{NAME}%View.</h2>

    <view-yield></view-yield>

</app-view>
```

### Controller
```js
@JSWorks.Controller
export class LoginController extends AbstractController {
    public view: View;
    public component: LoginPage;
    public form: FormForElement;
  
    public onCreate(): void {

    }
  
    public onNavigate(args: object): void {

  
        super.onNavigate(args);
  
        CurrentUserHelper.currentUser.then((user: UserModel) => {
            if (user.loggedIn()) {
                user.logout();
            }
        });
    }
}
```


### Model
```js
interface %{NAME}%ModelFields {
    id: number;
    name: string;
    age: number;
    important?: boolean;
}
  

@JSWorks.Model
class %{NAME}%Model implements %{NAME}%ModelFields {
  
    @JSWorks.ModelField
    @JSWorks.ModelPrimaryKey
    public id: number;
  
    @JSWorks.ModelField
    public name: string;
  
    @JSWorks.ModelField
    public age: number;
  
    @JSWorks.ModelField
    public important: boolean;
  

    @JSWorks.ModelQueryMethod
    public query(params?: object): Promise<%{NAME}%Model[]> {
        params = params || {};
        const sort = String(params['sort'] || 'ASC');
  
        return new Promise<%{NAME}%Model[]>((resolve, reject) => {
            this.jsonParser.parseURLAsync(`/persons/all?sort=${sort}`, JSWorks.HTTPMethod.POST).then((data) => {
                const models: %{NAME}%Model[] = [];
  
                data.forEach((item: %{NAME}%ModelFields) => {
                    models.push(this.from(item));
                });
  
                resolve(models);
            });
        });
    }
  

    @JSWorks.ModelCreateMethod
    public create(): Promise<%{NAME}%Model> {
        return new Promise<%{NAME}%Model>((resolve, reject) => {
            this.jsonParser.parseURLAsync('/persons/create', JSWorks.HTTPMethod.POST,
                    JSON.stringify(this.gist())).then((data) => {
                resolve(this.from(data));
            });
        });
    }
  

    @JSWorks.ModelUpdateMethod
    public update(): Promise<%{NAME}%Model> {
        return new Promise<%{NAME}%Model>((resolve, reject) => {
            this.jsonParser.parseURLAsync('/persons/update', JSWorks.HTTPMethod.POST,
                    JSON.stringify(this.gist())).then((data) => {
                this.apply(data);
                this.setDirty(false);
  
                resolve(this);
            });
        });
    }

  
    @JSWorks.ModelDeleteMethod
    public delete(): Promise<%{NAME}%Model> {
        return new Promise<%{NAME}%Model>((resolve, reject) => {
            this.jsonParser.parseURLAsync('/persons/delete', JSWorks.HTTPMethod.POST,
                        JSON.stringify({ id: this.id })
                    ).then((data) => {
                resolve(this);
            });
        });
    }
}

```


