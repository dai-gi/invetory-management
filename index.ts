//　~~~~~~~~~ 定義部分 ~~~~~~~~~~~

type Item = {
  id: number;
  name: string;
  detail: string;
};

type newItem = {
  id: number;
  name: string;
  status: 'taking' | 'returnd';
};

let items: Item[] = [
  {
    id: 1,
    name: 'スマホ',
    detail: '64GB'
  },
  {
    id: 2,
    name: 'ディスプレイ',
    detail: '28インチ'
  },
  {
    id: 3,
    name: 'ノートパソコン',
    detail: '15インチ'
  }
];

let newItemList: newItem[] = [];

// items配列にアイテムを追加する関数
function addItem(itemName: string, itemDetails: string): void {
  const newItem = {
    id: items.length + 1,
    name: itemName,
    detail: itemDetails
  };

  items.push(newItem);
}

// 配列内のアイテムを削除する関数
function deleteItem(targetItem: string | number): Item[] {
  const item =
    typeof targetItem === 'number'
      ? items.filter((item) => item.id !== targetItem)
      : items.filter((item) => item.name !== targetItem);

  if (!item) {
    console.error('アイテム情報が見つかりませんでした');
    return items;
  }

  return item;
}

// 配列内のアイテム情報を更新する関数
function updateItem(
  targetId: number,
  UpdateTarget: '名前' | '詳細',
  nameOrDetail: string
): Item[] {
  const item = items.find((item) => item.id === targetId);
  if (!item) {
    console.error('アイテム情報が見つかりませんでした');
    return items;
  }

  console.log('\n\n更新前のアイテム情報');
  console.log(item);

  switch (UpdateTarget) {
    case '名前':
      item.name = nameOrDetail;
      break;
    case '詳細':
      item.detail = nameOrDetail;
      break;
  }

  console.log('\n\n正常に更新されました');
  console.log(item);

  return items;
}

// newItemListにアイテムを追加する関数
function addNewItem(
  item: Omit<Item, 'detail'>,
  inputStatus: 'taking' | 'returnd'
): void {
  const updatedItem = {
    ...item,
    status: inputStatus
  };

  newItemList.push(updatedItem);
}

// itemsまたは、newItemListにアイテムを追加できる関数
function addManagedTarget<T>(array: T[], manegedTarget: T) {
  array.push(manegedTarget);
}

//　~~~~~~~~~ 処理部分 ~~~~~~~~~~~

// items配列にアイテムを追加する関数
addItem('マウス', 'ワイヤレス');
console.log('\nアイテム追加');
console.log(items);

// 配列内のアイテムを削除する関数
items = deleteItem(3);
console.log('\n\nアイテム削除');
console.log(items);

// 配列内のアイテム情報を更新する関数
updateItem(1, '名前', 'スマートフォン');

// newItemListにアイテムを追加する関数
addNewItem(
  {
    id: 1,
    name: 'スマホ'
  },
  'taking'
);
console.log('\n\nnewItemListにアイテムを追加');
console.log(newItemList);

// itemsまたは、newItemListにアイテムを追加できる関数
addManagedTarget(items, {
  id: 8,
  name: 'キーボード',
  detail: 'メカニカル式'
});
console.log('\n\nアイテムを追加');
console.log(items);
console.log('\n\n終了');
