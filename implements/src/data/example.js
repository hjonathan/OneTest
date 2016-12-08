JSON
{
    "class":"Module",
    name:"User administration",
    models:[
    {
        class:"Model",
        name:"user",
        fields: [
            {
                class:"Model.Field",
                name:"username",
            }
        ]
    {
        class:"CRUD.Action",
        name:"Compile",
        icon:"/img/icons/compile.png",
        action:"function(RestApi){RestApi.Compiler.compile();}"
    }
}
]
}
JS



{
class: Module,
    name:"User administration",
    models:[
    {
        class:Model,
        name:"user",
        fields: [
            {
                class:Model.Field,
                name:"username",

            }
        ]
    }
],
    components:[
    {
        class:CRUD,

    {
        class:"CRUD.Action",
        name:"New",
        icon:"/img/icons/add.png",
        action:function(controller){controller.newModel()}
    }
    {
        class:"CRUD.Action",
        name:"Compile",
        icon:"/img/icons/compile.png",
        action:function(RestApi){RestApi.Compiler.compile();}
    }
}
]
}
//Lista de Providers:
RestApi
//Lista de Clases Globales
Module
Model
CRUD

<module
name="User Administration"
icon="/img/icons/users.png"
    >
    <models>
    <model name="user">
        <!--
        types:
            integer, float, string, boolean, date, datetime, timestamp, base64
        -->
    <fields>
    <field name="username"  type="string" default="" required="true" />
    <field name="lastname"  type="string" default="" />
    <field name="firstname" type="string" default="" />
    <field name="status"    type="string" default="INACTIVE" enum="ACTIVE|INACTIVE" />
    </fields>
    <hasOne name="phone"    model="phone" />
    <hasMany name="logins"  model="login" />
    <belongsToMany name="roles"   model="role" />
    </model>
    <model name="role">
    <field name="name"      type="string" default="" />
    <field name="status"    type="string" default="INACTIVE" enum="ACTIVE|INACTIVE" />
    <belongsToMany name="users" model="user" />
    </model>
    <model name="login">
    <field name="datetime"  type="timestamp" default="now()" />
    <belongsTo name="user"  model="user" />
    </model>
    <model name="phone">
    <field name="name"      type="string" default="Home phone" />  <!--name-->
    <field name="number"    type="string" />   <!--number-->
    <belongsTo name="user"  model="user" />   <!--user_id-->
    </model>
    </models>
    <crud:component name="Users" model="user">
    <crud:list>
    <!-- si crud:select no esta definido debera hacer un select * from Model -->
<crud:select sql="select *, @@sql_mode as sql_mode from users where deleted_at is null" />

    <crud:actions>
    <!--
        Crud: Controlador principal del CRUD
    -->
<crud:action name="New" icon="/img/icons/add.png" action="this.new()"/>
    <crud:action name="Summary" icon="/img/icons/summary.png" action="Crud.summary()"/>
    <crud:action name="Edit" icon="/img/icons/edit.png" action="Crud.edit()"/>
    <crud:action name="Disable" icon="/img/icons/disable.png" action="Crud.disable()"/>
    <crud:action name="Delete" icon="/img/icons/delete.png" action="Crud.delete()"/>
    </crud:actions>
<crud:columns>
    <!--
        lenguaje propuesto para las expresiones: javascript, tmb podria ser php o alguno propio
        roles, logins son colecciones de modelos
        operaciones de agregacion en colecciones de modelos:
            - sum('expression')
            - count('expression')
            - avg('expression')
            - min('expression')
            - max('expression')
            - contact('expression')
        'expression' = es una expresión en el lenguaje propuesto
    -->
<crud:column name="userName" title="User Name" bind="username" />
    <crud:column name="fullName" title="Full Name" bind="lastname+', '+fistname" />
    <crud:column name="status" title="Status" bind="status" />
    <crud:column name="role" title="Role" bind="roles.concat('name+\',\'')" />
    <crud:column name="lastLogin" title="Last Login" format="date" bind="logins.max('datetime')" />
    <crud:column name="sqlMode" title="Server SQL Mode" bind="sql_mode" />
    </crud:columns>
</crud:list>
    <!--
    Cual usamos:
    modelos
    {
        model:[
            {
                firstname:"David"?
                roles:[
                    {
                    }
                ]
            }
        ],
        list:[
            {
                firstname:"David"?
                o
                fullName:"David Callizaya"
            }
        ]
        username,lastname,firstname,roles:[],logins:[]
    }
    por columnas
    {
        userName,fullName,status,role,lastLogin,sqlMode
    }
    -->
<crud:edit>
<crud:field name="userName" title="User Name" bind="username">
    <ui:input disabled="true"/>
    </crud:field>
<crud:field name="firstname" title="First Name" bind="fistname" ui:type="text" />
    <ui:input name="lastname" title="First Name" bind="fistname" disabled="true"
    />
        <!--
            Model hace referencia al modelo definido en:
                <crud:component name="Users" model="user">
        -->
    <crud:field name="status" title="Status" bind="status">
    <ui:combo options="User.status.enum">
    </crud:field>
<crud:field name="role" title="Role" bind="roles.concat('name+\',\'')">
    </crud:field>
<crud:field name="lastLogin" title="Last Login" format="date" bind="logins.last('datetime')" />
    <crud:field name="sqlMode" title="Server SQL Mode" bind="sql_mode" />
    </crud:edit>
<crud:new>
<crud:field name="userName" title="User Name" bind="username">
    <ui:input required="true"/>
    </crud:field>
<crud:field name="firstname" title="First Name" bind="fistname" ui:type="text" />
    <ui:input name="lastname" title="First Name" bind="fistname" disabled="true"
    />
        <!--
            Model hace referencia al modelo definido en:
                <crud:component name="Users" model="user">
        -->
    <crud:field name="status" title="Status" bind="status">
    <ui:combo options="User.status.enum">
    </crud:field>
<crud:field name="role" title="Role" bind="roles.concat('name+\',\'')">
    </crud:field>
<crud:field name="lastLogin" title="Last Login" format="date" bind="logins.last('datetime')" />
    <crud:field name="sqlMode" title="Server SQL Mode" bind="sql_mode" />
    </crud:new>
</crud>
</module>