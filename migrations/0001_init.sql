CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Admin',
  status TEXT NOT NULL DEFAULT 'draft',
  published_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO posts (title, content, author, status, published_at) VALUES
  (
    'ยินดีต้อนรับสู่ Blog',
    'นี่คือบทความตัวอย่างแรกของเว็บไซต์ คุณสามารถเพิ่ม แก้ไข และลบบทความได้จากหน้า Admin',
    'Admin',
    'published',
    datetime('now')
  ),
  (
    'เริ่มต้นใช้งาน Cloudflare D1',
    'เว็บไซต์นี้ใช้ Next.js บน Cloudflare Workers และเก็บข้อมูลบทความใน D1 database ซึ่งเป็น SQLite แบบ distributed ของ Cloudflare',
    'Admin',
    'published',
    datetime('now', '-1 day')
  ),
  (
    'บทความร่างตัวอย่าง',
    'บทความนี้ยังเป็น draft จะไม่แสดงในหน้าเว็บสาธารณะจนกว่าจะเผยแพร่',
    'Admin',
    'draft',
    NULL
  );
