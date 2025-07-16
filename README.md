# 🍷 Francachela - Sistema de Gestión de Licorería

Sistema web completo para la gestión de licorerías con atención física y delivery por WhatsApp.

## 📋 PLAN DE DESARROLLO COMPLETO

### **FASE 1: CONFIGURACIÓN INICIAL** ✅

#### 1.1 Backend Setup
```bash
cd BackendFR
npm install
```

#### 1.2 Configuración de Base de Datos
- Crear base de datos PostgreSQL: `francachela_db`
- Configurar variables de entorno en `.env`
- Ejecutar migraciones iniciales

#### 1.3 Frontend Setup
```bash
cd francachela-liquor-hub
npm install
```

### **FASE 2: DESARROLLO DEL BACKEND**

#### 2.1 Estructura de Entidades (Base de Datos)

**Entidades Principales:**
- `User` - Usuarios del sistema (Admin, Vendedor)
- `Category` - Categorías de productos
- `Product` - Productos con stock y precios
- `Customer` - Clientes con puntos y fiados
- `Sale` - Ventas con items y métodos de pago
- `SaleItem` - Items individuales de venta
- `Promotion` - Promociones y descuentos
- `Combo` - Combos de productos
- `Expense` - Gastos por categoría
- `InventoryMovement` - Movimientos de inventario
- `LoyaltyPoints` - Sistema de puntos
- `Delivery` - Pedidos por WhatsApp
- `AuditLog` - Logs de auditoría

#### 2.2 Módulos del Backend

**Módulos a desarrollar:**
1. **Auth** - Autenticación JWT
2. **Users** - Gestión de usuarios
3. **Products** - CRUD de productos
4. **Categories** - Gestión de categorías
5. **Sales** - Sistema POS y ventas
6. **Customers** - Gestión de clientes
7. **Promotions** - Promociones y combos
8. **Inventory** - Control de inventario
9. **Reports** - Reportes y métricas
10. **Expenses** - Gestión de gastos
11. **Delivery** - Pedidos por WhatsApp
12. **Loyalty** - Sistema de fidelización
13. **Audit** - Logs de auditoría
14. **WhatsApp** - Integración con WhatsApp
15. **Backup** - Backups automáticos

#### 2.3 Endpoints Principales

**Autenticación:**
- `POST /auth/login` - Login de usuarios
- `POST /auth/refresh` - Renovar token
- `POST /auth/logout` - Cerrar sesión

**Productos:**
- `GET /products` - Listar productos
- `POST /products` - Crear producto
- `PUT /products/:id` - Actualizar producto
- `DELETE /products/:id` - Eliminar producto
- `POST /products/import` - Importar desde Excel
- `GET /products/export` - Exportar a Excel

**Ventas:**
- `POST /sales` - Crear venta
- `GET /sales` - Listar ventas
- `GET /sales/:id` - Obtener venta
- `POST /sales/:id/complete` - Completar venta
- `GET /sales/reports` - Reportes de ventas

**Clientes:**
- `GET /customers` - Listar clientes
- `POST /customers` - Crear cliente
- `PUT /customers/:id` - Actualizar cliente
- `GET /customers/:id/points` - Puntos del cliente
- `POST /customers/:id/fiado` - Registrar fiado

### **FASE 3: DESARROLLO DEL FRONTEND**

#### 3.1 Módulos del Frontend

**Páginas principales:**
1. **Dashboard** - Métricas y resumen
2. **POS** - Punto de venta táctil
3. **Productos** - Gestión de productos
4. **Clientes** - Gestión de clientes
5. **Promociones** - Gestión de promociones
6. **Reportes** - Reportes y análisis
7. **Fiados** - Gestión de fiados
8. **Gastos** - Control de gastos
9. **Delivery** - Pedidos por WhatsApp
10. **Fidelización** - Sistema de puntos
11. **Auditoría** - Logs del sistema
12. **Configuración** - Configuraciones

#### 3.2 Componentes Principales

**Componentes UI:**
- `ProductCard` - Tarjeta de producto
- `ProductForm` - Formulario de producto
- `POSInterface` - Interfaz de punto de venta
- `CustomerForm` - Formulario de cliente
- `SalesChart` - Gráficos de ventas
- `InventoryTable` - Tabla de inventario
- `PromotionCard` - Tarjeta de promoción
- `DeliveryStatus` - Estado de delivery

#### 3.3 Hooks Personalizados

**Hooks a crear:**
- `useProducts` - Gestión de productos
- `useSales` - Gestión de ventas
- `useCustomers` - Gestión de clientes
- `useInventory` - Control de inventario
- `useReports` - Reportes y métricas
- `useWhatsApp` - Integración WhatsApp

### **FASE 4: FUNCIONALIDADES ESPECÍFICAS**

#### 4.1 Sistema POS (Punto de Venta)

**Características:**
- Interfaz táctil optimizada
- Búsqueda rápida por código de barras
- Agregado de productos al carrito
- Cálculo automático de totales
- Aplicación de promociones
- Múltiples métodos de pago
- Impresión de tickets
- Modo oscuro/claro

#### 4.2 Gestión de Inventario

**Funcionalidades:**
- Control de stock en tiempo real
- Alertas de stock mínimo
- Movimientos de inventario
- Ajustes de inventario
- Reportes de stock
- Importación masiva

#### 4.3 Sistema de Promociones

**Tipos de promociones:**
- Descuentos por porcentaje
- Descuentos por cantidad (3x2)
- Combos de productos
- Promociones por fecha
- Promociones por cliente VIP

#### 4.4 Fidelización y Puntos

**Sistema de puntos:**
- Acumulación automática
- Canje de puntos
- Promociones especiales
- Ranking de clientes
- Notificaciones por cumpleaños

#### 4.5 Integración WhatsApp

**Funcionalidades:**
- Bot automático de respuestas
- Catálogo por WhatsApp
- Consulta de puntos
- Pedidos por WhatsApp
- Notificaciones automáticas
- Estado de delivery

### **FASE 5: REPORTES Y MÉTRICAS**

#### 5.1 Dashboard Principal

**Métricas clave:**
- Ventas del día/semana/mes
- Productos más vendidos
- Clientes top
- Ganancias netas
- Stock bajo
- Promociones activas

#### 5.2 Reportes Detallados

**Tipos de reportes:**
- Reporte de ventas
- Reporte de inventario
- Reporte de clientes
- Reporte de gastos
- Reporte de fiados
- Reporte de puntos

### **FASE 6: SEGURIDAD Y AUDITORÍA**

#### 6.1 Autenticación y Autorización

**Características:**
- JWT tokens
- Roles y permisos
- Sesiones seguras
- Logout automático
- Cambio de contraseña

#### 6.2 Auditoría

**Logs a registrar:**
- Acciones de usuarios
- Cambios en productos
- Ventas y transacciones
- Accesos al sistema
- Errores y excepciones

### **FASE 7: BACKUP Y MANTENIMIENTO**

#### 7.1 Backups Automáticos

**Estrategia:**
- Backups diarios a Google Drive
- Exportación a Excel/CSV
- Backup manual disponible
- Restauración de datos

#### 7.2 Mantenimiento

**Tareas automáticas:**
- Limpieza de logs antiguos
- Optimización de base de datos
- Verificación de integridad
- Notificaciones de estado

## 🚀 PASOS PARA EJECUTAR EL PROYECTO

### 1. Configuración del Backend

```bash
cd BackendFR

# Instalar dependencias
npm install

# Crear archivo .env
cp env.example .env

# Configurar variables de entorno
# Editar .env con tus credenciales

# Crear base de datos PostgreSQL
createdb francachela_db

# Ejecutar migraciones
npm run migration:run

# Ejecutar seeds
npm run seed

# Iniciar servidor de desarrollo
npm run start:dev
```

### 2. Configuración del Frontend

```bash
cd francachela-liquor-hub

# Instalar dependencias
npm install

# Configurar variables de entorno
# Crear .env con VITE_API_URL=http://localhost:3001/api/v1

# Iniciar servidor de desarrollo
npm run dev
```

### 3. Configuración de Base de Datos

```sql
-- Crear base de datos
CREATE DATABASE francachela_db;

-- Usuario por defecto (se creará con seeds)
-- Email: admin@francachela.com
-- Password: admin123
```

### 4. Configuración de Redis (para colas)

```bash
# Instalar Redis
# En Windows: usar WSL o Docker
# En Linux/Mac: brew install redis

# Iniciar Redis
redis-server
```

## 📁 ESTRUCTURA DE CARPETAS

```
sistemsFR/
├── BackendFR/                    # Backend NestJS
│   ├── src/
│   │   ├── common/              # Utilidades comunes
│   │   ├── config/              # Configuraciones
│   │   ├── modules/             # Módulos de la aplicación
│   │   │   ├── auth/           # Autenticación
│   │   │   ├── users/          # Usuarios
│   │   │   ├── products/       # Productos
│   │   │   ├── categories/     # Categorías
│   │   │   ├── sales/          # Ventas
│   │   │   ├── customers/      # Clientes
│   │   │   ├── promotions/     # Promociones
│   │   │   ├── inventory/      # Inventario
│   │   │   ├── reports/        # Reportes
│   │   │   ├── expenses/       # Gastos
│   │   │   ├── delivery/       # Delivery
│   │   │   ├── loyalty/        # Fidelización
│   │   │   ├── audit/          # Auditoría
│   │   │   ├── whatsapp/       # WhatsApp
│   │   │   └── backup/         # Backups
│   │   ├── database/           # Migraciones y seeds
│   │   └── main.ts             # Punto de entrada
│   ├── package.json
│   └── tsconfig.json
│
└── francachela-liquor-hub/      # Frontend React
    ├── src/
    │   ├── components/         # Componentes UI
    │   ├── pages/             # Páginas
    │   ├── hooks/             # Hooks personalizados
    │   ├── services/          # Servicios API
    │   ├── types/             # Tipos TypeScript
    │   ├── utils/             # Utilidades
    │   └── App.tsx            # Componente principal
    ├── package.json
    └── vite.config.ts
```

## 🛠️ TECNOLOGÍAS UTILIZADAS

### Backend
- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para PostgreSQL
- **PostgreSQL** - Base de datos principal
- **Redis** - Cache y colas
- **JWT** - Autenticación
- **Bull** - Colas de trabajo
- **Swagger** - Documentación API

### Frontend
- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **TailwindCSS** - Framework CSS
- **shadcn/ui** - Componentes UI
- **React Router** - Enrutamiento
- **React Query** - Gestión de estado
- **Chart.js** - Gráficos

### Integraciones
- **WhatsApp Business API** - Mensajería
- **Google Drive API** - Backups
- **Excel/CSV** - Import/Export

## 📊 FUNCIONALIDADES PRINCIPALES

### ✅ Completadas
- [x] Estructura base del frontend
- [x] Configuración de TailwindCSS
- [x] Componentes UI básicos
- [x] Navegación lateral
- [x] Dashboard básico
- [x] Página de productos
- [x] Página POS básica

### 🔄 En Desarrollo
- [ ] Backend completo con NestJS
- [ ] Base de datos PostgreSQL
- [ ] Autenticación JWT
- [ ] CRUD de productos
- [ ] Sistema POS completo
- [ ] Gestión de clientes
- [ ] Sistema de promociones
- [ ] Reportes y métricas
- [ ] Integración WhatsApp
- [ ] Sistema de puntos
- [ ] Backups automáticos

### 📋 Próximas Funcionalidades
- [ ] Catálogo público
- [ ] App móvil
- [ ] Múltiples sucursales
- [ ] Integración con proveedores
- [ ] Sistema de alertas
- [ ] Notificaciones push

## 🎯 PRÓXIMOS PASOS

1. **Completar el backend** - Desarrollar todos los módulos
2. **Conectar frontend con backend** - Integrar APIs
3. **Implementar sistema POS** - Interfaz táctil completa
4. **Desarrollar reportes** - Dashboard con métricas
5. **Integrar WhatsApp** - Bot automático
6. **Sistema de puntos** - Fidelización
7. **Testing** - Pruebas unitarias y e2e
8. **Deployment** - Despliegue en producción

## 📞 Soporte

Para soporte técnico o consultas sobre el desarrollo:
- Email: desarrollo@francachela.com
- WhatsApp: +51 999 999 999

---

**Francachela - Tu tienda de licores** 🍷
*Sistema de gestión integral para licorerías* 