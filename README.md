# Componentes para el renderizado automatizado de información
#

Para resolver el renderizado automatizado de grandes volumenes de información, usualmente alojada en algún archivo específico o base de datos, vamos a desarrollar un componente que mostraremos de manera indefinida.

# Componente Card
## Arquitectura del componente

### 1. Separation of Concerns

Componente Card: Componente presentacional, reusable que muestra información relativa a un ùnico producto.

Componente Home: Componente contenedor que organiza o filtra la información y renderiza múltiples componentes Card (o ninguno).

### 2. Patrón basado en Props

El componente Card acepta un numero definido de props (propiedades) para flexibilizar su estado. 

- title, description, price - información principal del producto
- category - clasificación opcional
- image - imagen opcional (con fallback emoji)

### 3. Data Structure

```js
products = [
  { id, product_name, category,  description, offer, discount,  price, picture_url, stock, price },
  // ... more products
]
```

Cada producto debe tener un identificador único (id), esto facilita su indexado y el uso de la llave ```key ```  prop de React.

Una organización bien estructurada de las propiedades del componente facilitan el escalado posterior si es necesario recuperar la información mediante un fetch a una. API.

### Componente Card

```jsx
// Card.jsx
import React from 'react'

export const Card = ({ title, description, price, image, category, stock }) => {
    return (
        <div>
            {/* Product Image */}
            <div>
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <span>📦</span>
                )}
            </div>

            {/* Product Info */}
            <div>
                {category && (
                    <span>
                        {category}
                    </span>
                )}
                <h3>{title}</h3>
                <p>{description}</p>

                {/* Price and Action */}
                <div>
                    <span>${price}</span>
                    <span>Stock:{stock}</span>
                    <button>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
```

### 4. Renderizado dinâmico con .map()
```jsx
{products.map(product => (
  <Card key={product.id} {...props} />
))}
```
Para utilizar el componente desde nuestro contenedor (Home u otro):

- 1- Iteraar sobre el array de productos 

- 2- Crear un componente Card para cada producto

- 3- Utilizar siempre ```key={product.id}``` para evitar errores de indexado de React.

### 5. Consideraciones de escalabilidad

Las tarjetas son autónomas y reutilizables.

Es relativamente fácil agregar funcionalidad como los controladores «Añadir al 
carrito».

Los datos del producto se pueden sustituir fácilmente con llamadas API o estado Redux.
El componente se puede extraer a archivos separados.

Mejoras y optimización posible.

Reemplazar la matriz de productos estáticos con ```useState``` + API fetch.

Añadir controladores de clics para la funcionalidad del carrito.

Implementar el enrutamiento a las páginas de detalles del producto.

La clave es la separación de la presentación (tarjeta) de la gestión de datos (página de inicio), lo que hace que el código sea fácil de mantener y probar.
#

# Refactorizado
Podemos adecuar nuestro componente a situaciones mas configurables modificando el enfoque del desarrollo. Una opción interesante en el diseńo de componentes con React es el uso de Rest oprators.

## Rest operators en componentes React

El operador de resto ```(...props)``` en los componentes React recopila múltiples elementos en una sola matriz u objeto. Cuando se utiliza en parámetros de función, reúne todos los argumentos o props restantes que no se han desestructurado explícitamente, agrupándolos para facilitar su manejo.

```js
function Component({ prop1, prop2, ...rest }) {
  // rest contains all other props not explicitly named
}
```

### Características principales

- Crea un nuevo objeto/matriz que contiene valores «sobrantes».
- Debe ser el último parámetro en la desestructuración.
- Proporciona flexibilidad para pasar propiedades desconocidas.
- Se suele combinar con el operador de propagación para el reenvío de propiedades.

#
## Refactorizado de componente Card con Rest operators solamente

### 1. Componente con solo Rest operators  

```jsx
const Card = ({ ...props }) => {}
```

- Captura TODOS los atributos en un único objeto de atributos.
- No es necesario enumerar los atributos individuales en la firma de la función.
- Máxima flexibilidad: se puede acceder a cualquier atributo que se pase.


### 2. Acceso a propiedades


```jsx 
props.image
props.title
props.category
// etc...
```

- Accede fácilmente a las propiedades con notación de puntos
- Limpio y legible
- No se necesita mapeo intermedio

### 3. Vaolores opcionales o por defecto con operador lógico OR

```jsx
{props.actionText || 'Add to Cart'}
```

- Provee valores por defecto a usar si la propiedad no es indicada o pasada

### 4. Renderizado condicional

```jsx
{props.badge && (<span>{props.badge}</span>)}
```

- Solo se renderiza si la propiedad existe.
- Maneja las propiedades opcionales con elegancia.


### Ventajas principales

- Simplicidad: no se necesita ningún objeto de configuración.
- Código más limpio: menos código repetitivo.
- Flexible: acepta cualquier número de propiedades.
- Seguro: las propiedades adicionales se ignoran, no se consideran errores.
- Fácil de usar: solo tienes que extender tu objeto de datos {...producto}.

### Patrón de uso
```jsx
// Simple spread
<Card {...product} />

// Override specific props
<Card {...product} actionText="Buy Now!" />

// Mix of spread and individual props
<Card {...product} badge="NEW" />
```

#
## Nuevo componente Card 

```jsx
export const Card = ({ ...props }) => {
  return (
    <div>
      {/* Product Image */}
      <div>
        {props.image ? (
          <img src={props.image} alt={props.title}/>
        ) : (
          <span>📦</span>
        )}
        {props.badge && (
          <span>
            {props.badge}
          </span>
        )}
      </div>
      
      {/* Product Info */}
      <div>
        {props.category && (
          <span>
            {props.category}
          </span>
        )}
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        
        {/* Price and Action */}
        <div>
          <span>${props.price}</span>
          <button>
            {props.actionText || 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};
```


- Firma de función: ```({ ...props })``` - captura todo lo que le pasamos al componente.
- Acceso a propiedades: ```props.title```, ```props.image```, ```props.price```, etc.
- Renderización opcional: ```{props.badge && ...}``` - solo se muestra si existe.
- Valores predeterminados: ```{props.actionText || “Añadir al carrito”}``` - texto alternativo.

### Como usar el componente
```jsx
// Method 1: Spread an object
<Card {...product} />

// Method 2: Individual props
<Card 
  title="Product Name"
  price={99.99}
  description="Great product"
  image="url.jpg"
/>

// Method 3: Mix both
<Card {...product} badge="NEW" actionText="Buy Now!" />
```
#
# Rutas dinámicas
## Pâgina detalle

### 1. Estructura del proyecto

```
src/
├── App.jsx                 # Main app with routing
├── components/
│   ├── Card.jsx           # Card component
├── pages/
│   ├── Home.jsx           # Your home page
│   ├── Products.jsx       # Your product page with cards
│   └── ProductDetail.jsx  # Product detail page
```

### 2. Conceptos fundamentales de la gestión de rutas dinámicas

```jsx
// En AppRoutes.jsx
<Route path="/product/:id" element={<ProductDetail />} />
```

Agregamos gestión de rutas en el Router

- ```:id``` es el parámetro dinámico
- Localiza y rutea ```/product/e5ac757d-24b5-4cca-a680-6a1f91a1eb56```, etc.

Luego desarrollamos la vista especifica 

```jsx
// ProductDetail.jsx
import React from 'react'
import { useParams } from 'react-router-dom';
// import data from '../data/db.json'


export const ProductDetail = () => {
    const { id } = useParams(); // Extract the ID from URL
    console.log(id)
    const product = data.find(item => item.id === id); // Find the produc by ID
    console.log(product)
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div>ProductDetail</div>
    )
}
```

En el componente usamos el hook ```useParams``` para extraer los parámetros de ruta que vamos a usar para indexar la base de datos

```jsx
// En ProductDetail.jsx
const { id } = useParams(); // If URL is /product/3, then id = "3"
```

Gestión de navegación

```jsx
// Método 1: Link component (preferred for internal links)
<Link to="/product/1">View Product</Link>

// Método 2: useNavigate hook (for programmatic navigation)
const navigate = useNavigate();
navigate('/product/1');
navigate(-1); // Go back
```

#
## Flujo de datos

- El usuario hace clic en la tarjeta → El enlace navega a /product/xxxx.
- El enrutador encuentra una coincidencia → Representa <ProductDetail />.
- El componente extrae el ID → useParams() devuelve { id: «xxx» }.
- Recupera/busca datos → Obtiene el producto con el ID xxxx.
- Representa los detalles → Muestra la información del producto.