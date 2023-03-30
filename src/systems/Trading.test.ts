import { describe, expect, it } from 'vitest'
import { ACTION_NAME } from '../actions';
import { Inventory } from '../components';
import { Ammo, Artifact } from '../entities/items';
import { PRICES } from '../entities/items/prices';
import { Merchant } from '../entities/Merchant';
import { Player } from '../entities/Player';
import { Trading } from './Trading';

// Both entities own ammo straight away

describe("Trading system", () => {
    it("trades items from two entities", () => {
        const player = new Player()
        const artifact = new Artifact(1);
        player.inventory.content.push(artifact)
        const merchant = new Merchant(0, 0)
        const originalMerchantInventory = getItemsName(merchant.inventory)
        const action = {
            name: ACTION_NAME.TRADE,
            payload: {
                item: artifact,
                player,
                merchant,
                transaction: "sell",
                quantity: 1
            }
        }

        Trading.run(action);

        const merchantItems = getItemsName(merchant.inventory)
        expect(merchantItems).toEqual([...originalMerchantInventory, "Artifact"])
        expect(itemsLength(player.inventory)).to.equal(1)
    });

    it("stacks items of same type", () => {
        const player = new Player()
        const merchant = new Merchant(0, 0)
        merchant.inventory.content.push(new Artifact(1))
        const item = new Artifact(1)
        const originalMerchantItems = itemsLength(merchant.inventory)
        const action = {
            name: ACTION_NAME.TRADE,
            payload: {
                item,
                player,
                merchant,
                transaction: "sell",
                quantity: 1
            }
        }

        Trading.run(action);

        const merchantItems = itemsLength(merchant.inventory)
        expect(merchantItems).toEqual(originalMerchantItems)
        expect(merchant.inventory.content[1].quantity).toEqual(2)
    });

    it.todo("ammo can be traded?")

    it("items are sold for Ammo", () => {
        const buyPrice = PRICES.Artifact.buy;
        const item = new Artifact(1)
        const player = new Player()
        player.inventory.content.push(item)
        const merchant = new Merchant(0, 0)
        const originalPlayertAmmo = countAmmo(player.inventory)
        const action = {
            name: ACTION_NAME.TRADE,
            payload: {
                item,
                player,
                merchant,
                transaction: "sell",
                quantity: 1
            }
        }

        Trading.run(action);

        expect(itemsLength(player.inventory)).toEqual(1)
        const playerAmmo = countAmmo(player.inventory)
        expect(playerAmmo).toEqual(originalPlayertAmmo + buyPrice)
    })

    it("items are bought for Ammo", () => {
        const sellPrice = PRICES.Artifact.sell
        const merchant = new Merchant(0, 0)
        const item = new Artifact(1)
        merchant.inventory.content.push(item)
        const player = new Player()
        const originalPlayertAmmo = 1000;
        findAmmo(player.inventory)!.quantity = originalPlayertAmmo;
        const action = {
            name: ACTION_NAME.TRADE,
            payload: {
                item,
                merchant,
                player,
                transaction: "buy",
                quantity: 1
            }
        }

        Trading.run(action);

        expect(itemsLength(player.inventory)).toEqual(2)
        const playerAmmo = countAmmo(player.inventory)
        expect(playerAmmo).toEqual(originalPlayertAmmo - sellPrice)
    })

    it("only does trade if buyer has enough ammo", () => {
        const item = new Artifact(1)
        const player = new Player()
        const originalPlayertAmmo = 0;
        findAmmo(player.inventory)!.quantity = originalPlayertAmmo;
        const merchant = new Merchant(0, 0)
        merchant.inventory.content.push(item)
        const action = {
            name: ACTION_NAME.TRADE,
            payload: {
                item,
                merchant,
                player,
                transaction: "buy",
                quantity: 1
            }
        }

        Trading.run(action);

        const playerAmmo = countAmmo(player.inventory)
        expect(playerAmmo).toEqual(originalPlayertAmmo)
        expect(itemsLength(player.inventory)).toEqual(1)
    })
})



const itemsLength = (inventory: Inventory) => {
    return inventory.content.length;
}

const countAmmo = (inventory: Inventory) => {
    return findAmmo(inventory)?.quantity || 0
}

const findAmmo = (inventory: Inventory) => {
    return inventory.content.find((item) => item.name === "Ammo")
}

const getItemsName = (inventory: Inventory) => {
    return inventory.content.map((item) => item.name)
}