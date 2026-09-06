package org.firstinspires.ftc.teamcode.pedro.swerve;

import com.pedropathing.controllers.Controller;
import com.pedropathing.revhub.drivetrains.CoaxialPod;
import com.pedropathing.revhub.drivetrains.CoaxialPodConfig;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

import org.firstinspires.ftc.teamcode.pedro.Constants;

/**
 * This is the SwervePIDTuner
 * You should use this to tune your swerve pod PID values
 * @author Havish Sripada
 */
@TeleOp
public class SwervePIDTuner extends OpMode {
    private static final TuningMode mode = TuningMode.LEFT_FRONT;

    public static double targetAngle = Math.PI / 4;
    private CoaxialPod pod;
    private CoaxialPodConfig config;

    public static double P;
    public static double I;
    public static double D;
    public static double F;

    @Override
    public void init() {
        switch (mode) {
            case LEFT_FRONT:
                config = Constants.leftFront;
                pod = new CoaxialPod(hardwareMap, Constants.leftFront);
                break;
            case RIGHT_FRONT:
                config = Constants.rightFront;
                pod = new CoaxialPod(hardwareMap, Constants.rightFront);
                break;
            case LEFT_BACK:
                config = Constants.leftBack;
                pod = new CoaxialPod(hardwareMap, Constants.leftBack);
                break;
            case RIGHT_BACK:
                config = Constants.rightBack;
                pod = new CoaxialPod(hardwareMap, Constants.rightBack);
                break;
        }
    }

    @Override
    public void loop() {
        config.turnController.set(Controller.pid(P, I, D).plus(Controller.proportionalFeedforward(F)));
        pod.move(targetAngle, 0, false);
    }

    private enum TuningMode {
        LEFT_FRONT,
        RIGHT_FRONT,
        LEFT_BACK,
        RIGHT_BACK
    }
}

