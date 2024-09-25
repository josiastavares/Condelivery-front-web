import "./BotaoSwitch.css"

function BotaoSwitch() {
    return (
            <label class="switch">
                <input type="checkbox" class="hidden-toggle" />
                <div class="slider">
                    <div class="button"></div>
                </div>
            </label>
    )
}

export default BotaoSwitch