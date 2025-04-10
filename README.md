
# Travel Tune Tales - Аудиогид по России

## Структура репозитория

- **Название репозитория:** `travel-tune-tales`
- **Файл с начальным экраном:** `src/pages/IntroScreen.tsx`

### Организация файлов

Репозиторий следует организовать следующим образом:

```
travel-tune-tales/
├── public/
│   ├── audio/                 # Аудиофайлы для аудиогидов
│   │   ├── hermitage.mp3
│   │   ├── red_square.mp3
│   │   └── ...
│   ├── birds/                 # Изображения птиц
│   │   ├── blue-bird-1.png
│   │   ├── yellow-bird-1.png
│   │   └── ...
│   ├── images/                # Изображения достопримечательностей
│   │   ├── landmarks/
│   │   │   ├── hermitage/
│   │   │   │   ├── 1.jpg
│   │   │   │   ├── 2.jpg
│   │   │   │   └── 3.jpg
│   │   │   ├── red-square/
│   │   │   └── ...
│   │   └── backgrounds/
│   │       ├── background-home.jpg
│   │       └── background-detail.jpg
│   ├── intro.gif              # Файл GIF для начального экрана
│   └── ...
├── src/
│   ├── components/
│   ├── data.ts                # Данные о достопримечательностях
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── IntroScreen.tsx    # Начальный экран
│   │   ├── LandmarkDetail.tsx
│   │   └── NotFound.tsx
│   └── ...
└── ...
```

## Как изменять контент

### Изменение названий и текста достопримечательностей

Для изменения названий достопримечательностей и текста необходимо отредактировать файл `src/data.ts`.

В этом файле содержится массив `landmarks`, каждый элемент которого представляет собой объект с информацией о достопримечательности:

```typescript
{
  id: 1,
  name: "Эрмитаж",                // Название достопримечательности
  subtitle: "Один из крупнейших...", // Подзаголовок
  description: "Государственный Эрмитаж...", // Полное описание
  images: [...],                  // Массив с URL изображений
  audioFile: "audio/hermitage.mp3", // Путь к аудиофайлу
  location: "Санкт-Петербург...", // Местоположение
  facts: [...]                    // Массив с интересными фактами
}
```

### Изменение текста на главной странице

Для изменения текста на главной странице откройте файл `src/pages/Home.tsx` и найдите следующие строки:

```tsx
<h1 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Аудиогид по России</h1>
<p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
  Исследуйте самые впечатляющие достопримечательности России с нашими аудиогидами. 
  Выберите место, которое хотите посетить виртуально.
</p>
```

Измените текст внутри тегов `<h1>` и `<p>` на нужный вам.

### Добавление/изменение медиафайлов

1. **Изображения достопримечательностей**:
   - Поместите изображения в соответствующие папки в `public/images/landmarks/[название]/`
   - Обновите пути в файле `src/data.ts` в массиве `images`

2. **Аудиофайлы**:
   - Поместите аудиофайлы в папку `public/audio/`
   - Обновите пути в файле `src/data.ts` в поле `audioFile`

3. **Изображения птиц**:
   - Поместите изображения в папку `public/birds/`
   - При использовании компонента `StaticBird` укажите путь к изображению в свойстве `birdImage`

4. **GIF для начального экрана**:
   - Поместите файл `intro.gif` в корневую папку `public/`
   - Компонент `IntroScreen.tsx` будет использовать этот файл
