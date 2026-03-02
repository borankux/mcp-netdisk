# MCP-NetDisk 智能网盘

一个具备 MCP (Model Context Protocol) 集成能力的私有网盘系统。

## 功能特性

### 核心功能
- **文件管理**: 上传、下载、预览、删除文件
- **文件夹管理**: 创建、浏览文件夹
- **存储配额**: 每个用户独立的存储空间限制

### 预览支持
- **Markdown**: 完整的 GFM 支持 + Mermaid 图表渲染
- **图片**: JPG, PNG, GIF, WebP, SVG
- **视频**: MP4, WebM, OGG
- **音频**: MP3, WAV, OGG
- **HTML**: 沙箱预览
- **PDF**: 在线预览
- **代码**: 语法高亮

### MCP 集成
- 创建 API Token
- 生成 MCP 配置
- AI 可以通过 Token 访问您的网盘文件
- 支持搜索、读取、创建、删除文件

### 用户管理
- 管理员创建用户
- 存储配额管理
- 用户状态管理（启用/禁用）
- 无自助注册

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 初始化数据库

```bash
npx prisma generate
npx prisma db push
npm run prisma:seed  # 创建默认管理员
```

### 3. 配置环境变量

编辑 `.env` 文件：

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key-change-this"
UPLOAD_DIR="./uploads"
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 5. 登录

- 用户名: `admin`
- 密码: `admin123`

## MCP 配置

### 创建 Token

1. 登录后进入 "Token 管理"
2. 点击 "创建 Token"
3. 填写名称并创建

### Claude Desktop 配置

在 Claude Desktop 配置文件中添加：

```json
{
  "mcpServers": {
    "netdisk": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "http://localhost:3000/api/mcp"],
      "env": {
        "NETDISK_TOKEN": "your-token-here"
      }
    }
  }
}
```

### MCP 工具

- `list_files`: 列出目录文件
- `search_files`: 搜索文件
- `read_file`: 读取文件内容
- `create_file`: 创建新文件
- `update_file`: 更新文件
- `delete_file`: 删除文件
- `get_storage_stats`: 获取存储统计

## 技术栈

- **前端**: Next.js 14, React 18, Tailwind CSS
- **后端**: Next.js API Routes
- **数据库**: SQLite, Prisma ORM
- **认证**: JWT
- **Markdown**: react-markdown, remark-gfm, mermaid

## 项目结构

```
mcp-netdisk/
├── prisma/
│   └── schema.prisma    # 数据库模型
├── src/
│   ├── app/
│   │   ├── api/        # API 路由
│   │   ├── dashboard/   # 管理界面
│   │   └── login/      # 登录页
│   ├── components/     # React 组件
│   └── lib/           # 工具函数
├── uploads/           # 文件存储目录
└── package.json
```

## 许可证

MIT License
