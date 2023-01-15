const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    // arrange
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    // act
    const items = gildedRose.updateQuality();
    // assert
    expect(items[0].name).toBe("foo");
  });
});



describe("Vest tests", function() {
  
  it("Vest with 10 sellIn 10 quality should have quality 9", function() {
    const sellIn = 10
    const quality = 10
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].quality).toBe(9);
  });
  it("Vest with 10 sellIn 10 quality should have sellIn 9", function() {
    const sellIn = 10
    const quality = 10
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].sellIn).toBe(9);
  });
  it("Vest with 0 sellIn 10 quality should have quality 8", function() {
    const sellIn = 0
    const quality = 10
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(8);
  });
  it("Vest with 0 sellIn 0 quality should have quality 0", function() {
    const sellIn = 0
    const quality = 0
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
})

describe("Aged Brie tests", function() {
  
  it("Aged Brie with 10 sellIn 10 quality should have quality 11", function() {
    const sellIn = 10
    const quality = 10
    const gildedRose = new Shop([new Item('Aged Brie', sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].quality).toBe(11);
  });
  it("Aged Brie with 10 sellIn 10 quality should have sellIn 9", function() {
    const sellIn = 10
    const quality = 10
    const gildedRose = new Shop([new Item('Aged Brie', sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].sellIn).toBe(9);
  });
  it("Aged Brie with 0 sellIn 0 quality should have quality 2", function() {
    const sellIn = 0
    const quality = 0
    const gildedRose = new Shop([new Item('Aged Brie', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(2);
  });
  it("Aged Brie with -10 sellIn 10 quality should have quality 12", function() {
    const sellIn = -10
    const quality = 10
    const gildedRose = new Shop([new Item('Aged Brie', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });
  it("Aged Brie with -10 sellIn 50 quality should have quality 50", function() {
    const sellIn = -10
    const quality = 50
    const gildedRose = new Shop([new Item('Aged Brie', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
})

describe("Sulfuras tests", function() {
  it("Sulfuras with 0 sellIn 80 quality should have quality 80", function() {
    const sellIn = 0
    const quality = 80
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
})


