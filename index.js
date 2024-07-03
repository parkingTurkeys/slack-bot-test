const { App } = require('@slack/bolt')

const app = new App({
    signingSecret: (process.env.SLACK_SIGNING_SECRET),
    token: (process.env.SLACK_BOT_TOKEN),
})

async function main () {
    await app.start(process.env.PORT || 3000)

    app.command('/whattodo', async ({ command, ack, say }) => {
        await ack()
        await say(`Hello!`)
    })

    console.log('⚡️ Server ready')
}

main()